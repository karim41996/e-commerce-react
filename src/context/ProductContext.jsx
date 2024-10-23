import React, { createContext, useState, useEffect, useContext } from 'react';
import { collection, onSnapshot, query, orderBy, Timestamp, addDoc, deleteDoc, doc, setDoc, getDocs } from 'firebase/firestore';
import { fireDB } from '../firebase/firebaseConfig';
import { toast } from 'react-toastify';

// Create context
const ProductContext = createContext();

// Custom hook to use the product context
export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};

// Create the provider component
export const ProductProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState({
        title: '',
        price: '',
        imageUrl: '',
        category: '',
        description: '',
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });
    
    const [product, setProduct] = useState([]);

    // Add products
    const addProduct = async () => {
        if (!products.title || !products.price || !products.imageUrl || !products.category || !products.description) {
            toast.error("Please fill all fields");
            return;
        }
        setLoading(true);
        try {
            const productRef = collection(fireDB, "products");
            await addDoc(productRef, products);
            toast.success("Product added successfully");
            setTimeout(() => {
                window.location.href = '/admin'
            }, 800)
            getProductData();
            // Reset products state
            setProducts({
                title: '',
                price: '',
                imageUrl: '',
                category: '',
                description: '',
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }),
            });
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error("Failed to add product");
        } finally {
            setLoading(false);
        }
    }    

    // Fetch product data from Firebase
    const getProductData = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time")
            );
            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                const productsArray = QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setProduct(productsArray);
                setLoading(false);
            });
            return unsubscribe;
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
    };

    // Fetch product data when component mounts
    useEffect(() => {
        const unsubscribe = getProductData();
        // Cleanup function
        return () => {
            if (unsubscribe && typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

    //Delete Product
    const deleteProduct = async (item) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'products', item.id))
            toast.success("Product deleted successfully");
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    //Update Product
    const edithandle = (item) => {
        setProducts(item)
    }

    const updateProduct = async (item) => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, "products", products.id), products)
            toast.success("Product updated successfully");
            setTimeout(() => {
                window.location.href = '/admin'
            }, 800)
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        setProducts("")
    }

    //All Order Products
    const [order, sertOrder] = useState([]);
    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            sertOrder(ordersArray);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getProductData();
        getOrderData();
    }, []);

    //All Users
    const [user, setUser] = useState([]);
    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getProductData()
        getOrderData()
        getUserData()
    },[]);

    // Provide context value
    return (
        <ProductContext.Provider value={{ 
            product, addProduct, setProducts, products, loading, deleteProduct,
            edithandle, updateProduct, order, user
        }}>
            {children}
        </ProductContext.Provider>
    );
};