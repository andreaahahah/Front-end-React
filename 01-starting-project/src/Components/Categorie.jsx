import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

const initialProducts = [
    {
        id: 1,
        name: 'Product 1',
        image: 'product1.jpg',
        price: 29.99,
        
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'product2.jpg',
        price: 19.99,
        
    },
    {
        id: 3,
        name: 'Product 3',
        image: 'product3.jpg',
        price: 49.99,
        
    },
    {
        id: 4,
        name: 'Product 4',
        image: 'product4.jpg',
        price: 39.99,
        
    },
    {
        id: 5,
        name: 'Product 5',
        image: 'product5.jpg',
        price: 59.99,
        
    },
    {
        id: 6,
        name: 'Product 6',
        image: 'product6.jpg',
        price: 89.99,
        
    },
    {
        id: 7,
        name: 'Product 7',
        image: 'product7.jpg',
        price: 99.99,
        
    },
    {
        id: 8,
        name: 'Product 8',
        image: 'product8.jpg',
        price: 24.99,
        
    },
    {
        id: 9,
        name: 'Product 9',
        image: 'product9.jpg',
        price: 34.99,
       
    },
    {
        id: 10,
        name: 'Product 10',
        image: 'product10.jpg',
        price: 15.99,
        
    },
    {
        id: 11,
        name: 'Product 11',
        image: 'product11.jpg',
        price: 79.99,
        
    },
    {
        id: 12,
        name: 'Product 12',
        image: 'product12.jpg',
        price: 55.99,
        
    },
    {
        id: 13,
        name: 'Product 13',
        image: 'product13.jpg',
        price: 39.99,
        
    },
    {
        id: 14,
        name: 'Product 14',
        image: 'product14.jpg',
        price: 19.99,
      
    },
    {
        id: 15,
        name: 'Product 15',
        image: 'product15.jpg',
        price: 44.99,
        
    },
];


export default function CircularDemo() {
    const [products, setProducts] = useState(initialProducts);

    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
        { breakpoint: '767px', numVisible: 2, numScroll: 1 },
        { breakpoint: '575px', numVisible: 1, numScroll: 1 },
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };

    const productTemplate = (product) => (
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 transition-transform transform hover:scale-105">
            <div className="mb-3">
                <img  alt={product.name} className="w-6 shadow-2" />
            </div>
            <div>
                <h4 className="mb-1">{product.name}</h4>
                <h6 className="mt-0 mb-3">${product.price}</h6>
                <Tag value={product.inventoryStatus} />
                <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                    <Button 
                        icon="pi pi-search" 
                        className="p-button p-button-rounded p-button-info" 
                        aria-label={`View details for ${product.name}`} 
                    />
                    <Button 
                        icon="pi pi-star-fill" 
                        className="p-button-success p-button-rounded" 
                        aria-label={`Favorite ${product.name}`} 
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="card">
            {products.length > 0 ? (
                <Carousel 
                    value={products} 
                    numVisible={5} 
                    numScroll={3} 
                    responsiveOptions={responsiveOptions} 
                    className="custom-carousel" 
                    circular 
                    autoplayInterval={3000} 
                    itemTemplate={productTemplate} 
                />
            ) : (
                <div className="text-center py-5">
                    <h5>No products available.</h5>
                </div>
            )}
        </div>
    );
}
