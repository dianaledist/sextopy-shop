import productxmas1 from "../assets/products/productxmas1.jpg";
import productxmas2 from "../assets/products/productxmas2.jpg";
import productxmas3 from "../assets/products/productxmas3.jpg";
import productxmas4 from "../assets/products/productxmas4.jpg";
import productacc1 from "../assets/products/productacc1.jpg";
import productacc2 from "../assets/products/productacc2.jpg";
import productacc3 from "../assets/products/productacc3.jpg";
import productacc4 from "../assets/products/productacc4.jpg";
import productjugt1 from "../assets/products/productjugt1.jpg";
import productjugt2 from "../assets/products/productjugt2.jpg";
import productjugt3 from "../assets/products/productjugt3.jpg";
import productjugt4 from "../assets/products/productjugt4.jpg";
import productnoved1 from "../assets/products/productnoved1.jpg";
import productnoved2 from "../assets/products/productnoved2.jpg";
import productnoved3 from "../assets/products/productnoved3.jpg";
import productnoved4 from "../assets/products/productnoved4.jpg";

var productosDB = [
    { 
        id: 1, 
        categoria: 'ropa-cool',
        nombre: 'Corset sensual de piel', 
        url:productxmas1, 
        descripcion:'Es una prenda muy sencilla que se ciñe perfectamente a tu figura.', 
        cttas: 'Corset de tono rojizo con cremallera al frente y cierre de lazos en la parte de atrás.',
        precio: 50, 
        stock:15,
        quantity:0,
        destacado: false
    },
    { 
        id: 2, 
        categoria: 'ropa-cool',
        nombre: 'Body de Cuello Halter', 
        url: productxmas2,  
        descripcion:'Posee un encanto elegante y misterioso.', 
        cttas: 'Body de encaje de alta calidad agradable para la piel, elástica, ligera y transpirable.',
        precio: 40, 
        stock:10,
        quantity:0,
        destacado: true
    },
    { 
        id: 3, 
        categoria: 'ropa-cool',
        nombre: 'Corset de cuero con hebillas', 
        url: productxmas3, 
        descripcion:'Es suave, elástico y cómodo de llevar.', 
        cttas: 'Corset con tirantes y cremallera de cuero adornado con hebillas. Lleva un fino forro de algodón.',
        precio: 60, 
        stock:20,
        quantity:0,
        destacado: true
    },
    { 
        id: 4, 
        categoria: 'ropa-cool',
        nombre: 'Sujetador abierto de encaje', 
        url: productxmas4, 
        descripcion:'Diseño exclusivo de división de pezón', 
        cttas: 'Sujetador de encaje floral suave y transparente de copa triangular sin cable y sin forro. ',
        precio: 35, 
        stock:15,
        quantity:0,
        destacado: false
    },
    { 
        id: 5, 
        categoria: 'accesorios',
        nombre: 'Máscara sexy gato negro', 
        url: productacc1,  
        descripcion:'Es muy ligera y cómoda de usar.', 
        cttas: 'Máscara sexy con forma de gato, hecha de plástico y encaje decorada con diamantes de imitación.',
        precio: 40, 
        stock:10,
        quantity:0,
        destacado: false
    },
    { 
      id: 6, 
      categoria: 'accesorios',
      nombre: 'Pezoneras sexys rojas', 
      url: productacc2, 
      descripcion:'Complemento sugerente y sexy.', 
      cttas: 'Pezoneras con forma de corazón y borlas. Llevan almohadillas adhesivas y son reutilizables.',
      precio: 10, 
      stock:20,
      quantity:0,
      destacado: false
    },
    { 
      id: 7, 
      categoria: 'accesorios',
      nombre: 'Máscara de conejo sexy', 
      url: productacc3, 
      descripcion:'Diseño único para tus momentos más atrevidos.', 
      cttas: 'Máscara de conejo sexy con orejas de color negro.',
      precio: 30, 
      stock:20,
      quantity:0,
      destacado: true
  },
  { 
      id: 8, 
      categoria: 'accesorios',
      nombre: 'Pezoneras sexys negras', 
      url: productacc4, 
      descripcion:'Un diseño elegante y discreto.', 
      cttas: 'Cubrepezones con forma de pétalos muy suaves y agradables al tacto.',
      precio: 18, 
      stock:20,
      quantity:0,
      destacado: false
  },
  { 
      id: 9, 
      categoria: 'juguetes-y-etc',
      nombre: 'Satisfyer Pro 2', 
      url: productjugt1, 
      descripcion:'Estimulador y succionador de clítoris para conseguir orgasmos múltiples y más intensos. ', 
      cttas: 'Estimula el clítoris sin contacto, con ondas expansivas y pulsaciones excitantes para obtener un mayor placer.',
      precio: 40, 
      stock:40,
      quantity:0,
      destacado: true
  },
  { 
      id: 10, 
      categoria: 'juguetes-y-etc',
      nombre: 'Pezoneras sexys negras', 
      url: productjugt2, 
      descripcion:'Un diseño elegante y discreto.', 
      cttas: 'Cubrepezones con forma de pétalos muy suaves y agradables al tacto.',
      precio: 18, 
      stock:20,
      quantity:0,
      destacado: false
  },
  { 
      id: 11, 
      categoria: 'juguetes-y-etc',
      nombre: 'Lush 2', 
      url: productjugt3, 
      descripcion:'Una bomba de placer asegurada.', 
      cttas: 'Lush 2 de Lovense es un vibrador experto en la zona G y el clítoris',
      precio: 35, 
      stock:50,
      quantity:0,
      destacado: false
  },
  { 
      id: 12, 
      categoria: 'juguetes-y-etc',
      nombre: 'Dildo rosa', 
      url: productjugt4, 
      descripcion:'Muy flexible adaptable y sumergible.', 
      cttas: 'Dildo de silicona termorreactiva y ventosa extrafuerte en la base.',
      precio: 18, 
      stock:10,
      quantity:0,
      destacado: false
  },
  { 
      id: 13, 
      categoria: 'novedades',
      nombre: 'Pintura corporal', 
      url: productnoved1 , 
      descripcion:'Pintura corporal excitante de chocolate belga.', 
      cttas: 'Este chocolate es especial para rociarlo por el cuerpo y pintar con el o saborearlo. Es comestible y deliciosamente excitante.',
      precio: 18, 
      stock:10,
      quantity:0,
      destacado: false
  },
  { 
      id: 14, 
      categoria: 'novedades',
      nombre: 'Kit erótico', 
      url: productnoved2, 
      descripcion:'Kit de cosmética erótica beso de frambuesa.', 
      cttas: 'Aceites y polvos afrodisíacos con aroma a frambuesa que harán que tus besos y caricias sean deliciosos.',
      precio: 48, 
      stock:14,
      quantity:0,
      destacado: false
  },
  { 
      id: 15, 
      categoria: 'novedades',
      nombre: 'Gominolas Kama Sutra', 
      url: productnoved3, 
      descripcion:'Tienen sabores dulces y afrutados.', 
      cttas: 'Gominolas con forma erótica y divertida de las figuras del Kama Sutra que le abren la puerta a juegos más bien picantes.',
      precio: 6, 
      stock:250,
      quantity:0,
      destacado: true
  },
  { 
      id: 16, 
      categoria: 'novedades',
      nombre: 'Esposas de peluche rojo', 
      url: productnoved4, 
      descripcion:'Esposas de peluche rojo para atarte a los sentidos más placenteros.', 
      cttas: 'No necesitas utilizar llaves: se ajustan cómodamente con un mosquetón.',
      precio: 18, 
      stock:4,
      quantity:0,
      destacado: false
  }
];

export default productosDB;