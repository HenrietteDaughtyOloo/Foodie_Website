import pizzaImage from "../images/pizza.jpg"
import chipoImage from "../images/chipo.png"
import bugImage from "../images/bug.jpeg"

const Images = [
  {
    img: pizzaImage,
    header: 'Pizza',
    ratings: '4.5',
    price: '$10.99',
    button: 'Add to Cart',
    tag: 'Italian',        
    ratings: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
          
        "currency": "$3.50",
        "buttonText": "Buy Now",
         
            
          
    },
    {
        img: chipoImage,
        header: 'Pizza',
        ratings: '4.5',
        price: '$10.99',
        button: 'Add to Cart',
        tag: 'Italian',        
        ratings: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
             "currency": "$4.20",
         "buttonText": "Buy Now",
      
         
       
 },
        
    {
        img: pizzaImage,
        header: 'Pizza',
        ratings: '4.5',
        price: '$10.99',
        button: 'Add to Cart',
        tag: 'Italian',        
        ratings: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),         
        "currency": "$5.00",
        "buttonText": "Buy Now",
 
    
   
},
{
    img: bugImage,
    header: 'Pizza',
    ratings: '4.5',
    price: '$10.99',
    button: 'Add to Cart',
    tag: 'Italian',        
    ratings: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
          
        "currency": "$3.50",
        "buttonText": "Buy Now",
         
            
          
    },
    {
        img: pizzaImage,
        header: 'Pizza',
        ratings: '4.5',
        price: '$10.99',
        button: 'Add to Cart',
        tag: 'Italian',        
        ratings: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
              
            "currency": "$3.50",
            "buttonText": "Buy Now",
             
                
              
        },
        {
            img: pizzaImage,
            header: 'Pizza',
            ratings: '4.5',
            price: '$10.99',
            button: 'Add to Cart',
            tag: 'Italian',        
            ratings: Array.from({ length: 5 }, (_, index) => <i key={index} className="bi bi-star-fill" style={{ color: 'yellow' }}></i>),
                  
                "currency": "$3.50",
                "buttonText": "Buy Now",
                 
                    
                  
            },
        ]
export default Images