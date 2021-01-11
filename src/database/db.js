import productxmas1 from "../assets/images/productxmas1.jpg";
import productxmas2 from "../assets/images/productxmas2.jpg";
import productxmas3 from "../assets/images/productxmas3.jpg";

const productosDB = [
    { 
        id: 1, 
        categoria: 'ropa-intima',
        nombre: 'Tanga xmas', 
        url:productxmas1, 
        descripcion:'El regalo más original para empezar el año con la mejor suerte', 
        cttas: 'Realizado 100% con fibras de origen natural. Super confortable para todos los cuerpos. Varios talles disponibles',
        precio: 50, 
        stock:15,
        quantity:0,
        destacado: true
    },
    { 
        id: 2, 
        categoria: 'ropa-intima',
        nombre: 'Conjunto ho ho ho!', 
        url:productxmas2,  
        descripcion:'Cuerpos divinos divinos para preparanos post-cena', 
        cttas: 'Conjunto delicado con varios detalles en encaje. Elastizado y perfecto para cualquier cuerpx. Gran decisión para estar en casa, ¿por qué no?',
        precio: 40, 
        stock:10,
        quantity:0,
        destacado: false
    },
    { 
        id: 3, 
        categoria: 'ropa-intima',
        nombre: 'Calzón navideño', 
        url:productxmas3, 
        descripcion:'Una manera diferente para tu visita de Papá Noel', 
        cttas: 'Tanga funny para cualquier persona que quiera divertirse en estas fiestas. Además de cómoda, super divertida!',
        precio: 60, 
        stock:20,
        quantity:0,
        destacado: true
    },
    { 
        id: 4, 
        categoria: 'accesorios',
        nombre: 'Tanguita crazy', 
        url:productxmas1, 
        descripcion:'El regalo más original para empezar el año con la mejor suerte', 
        cttas: 'Realizado 100% con fibras de origen natural. Super confortable para todos los cuerpos. Varios talles disponibles',
        precio: 50, 
        stock:15,
        quantity:0,
        destacado: false
    },
    { 
        id: 5, 
        categoria: 'accesorios',
        nombre: 'Body love bra', 
        url:productxmas2,  
        descripcion:'Cuerpos divinos divinos para preparanos post-cena', 
        cttas: 'Conjunto delicado con varios detalles en encaje. Elastizado y perfecto para cualquier cuerpx. Gran decisión para estar en casa, ¿por qué no?',
        precio: 40, 
        stock:10,
        quantity:0,
        destacado: false
    },
    { 
        id: 6, 
        categoria: 'juguetes-eroticos',
        nombre: 'Lubricante', 
        url:productxmas3, 
        descripcion:'Una manera diferente para tu visita de Papá Noel', 
        cttas: 'Tanga funny para cualquier persona que quiera divertirse en estas fiestas. Además de cómoda, super divertida!',
        precio: 60, 
        stock:20,
        quantity:0,
        destacado: true
    }
]


export default productosDB;