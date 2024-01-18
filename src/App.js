import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import sectionData from "./Data/sectionData";




const App = () => {
  return (
    <div>
      <Navbar />
      <About />
     
     {
          sectionData.map((item,index)=>{
            return(
              <Section key={index}          
               title={item.title}
            description={item.description}
            />
            )
          })
     }
     
     
    
      <Footer />
    </div>
  );
};

export default App;

// method 1
// const App = () => {
//   return(
//       <div>
//     <Navbar />
//     <About />
//     <Section />
//     <Footer />
//       </div>
//   )
// }

// using 2 method props and object
// const App = () => {
//   return(
//       <div>
//     <Navbar />
//     <About />
//     <section
//     title = "skills"
//     description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta quam ut numquam fugit, repudiandae possimus reiciendis sunt minima nisi explicabo deserunt fugiat soluta quod corporis id labore nam vitae!
//      Ipsum obcaecati culpa quam in qui quaerat, dolorem aperiam sit hic explicabo libero nesciunt numquam eum officia eius quas optio! Nesciunt accusamus nisi cum quidem sed molestias vel alias enim!
//      Architecto natus provident soluta quae, quos sed earum! Adipisci recusandae iusto minus error, ducimus dicta, voluptatum quaerat magni officiis dignissimos quo deserunt nihil? Repellendus veniam quisquam itaque cum eaque totam.
//      Rerum, atque aperiam. Eligendi, explicabo, eos alias earum facilis, deleniti aspernatur officiis itaque suscipit ipsam fugiat temporibus ven"
//     />
//      <section
//     title = "Qualfication"
//     description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta quam ut numquam fugit, repudiandae possimus reiciendis sunt minima nisi explicabo deserunt fugiat soluta quod corporis id labore nam vitae!
//      Ipsum obcaecati culpa quam in qui quaerat, dolorem aperiam sit hic explicabo libero nesciunt numquam eum officia eius quas optio! Nesciunt accusamus nisi cum quidem sed molestias vel alias enim!
//      Architecto natus provident soluta quae, quos sed earum! Adipisci recusandae iusto minus error, ducimus dicta, voluptatum quaerat magni officiis dignissimos quo deserunt nihil? Repellendus veniam quisquam itaque cum eaque totam.
//      Rerum, atque aperiam. Eligendi, explicabo, eos alias earum facilis, deleniti aspernatur officiis itaque suscipit ipsam fugiat temporibus ven"
//     />
//      <section
//     title = "project"
//     description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta quam ut numquam fugit, repudiandae possimus reiciendis sunt minima nisi explicabo deserunt fugiat soluta quod corporis id labore nam vitae!
//      Ipsum obcaecati culpa quam in qui quaerat, dolorem aperiam sit hic explicabo libero nesciunt numquam eum officia eius quas optio! Nesciunt accusamus nisi cum quidem sed molestias vel alias enim!
//      Architecto natus provident soluta quae, quos sed earum! Adipisci recusandae iusto minus error, ducimus dicta, voluptatum quaerat magni officiis dignissimos quo deserunt nihil? Repellendus veniam quisquam itaque cum eaque totam.
//      Rerum, atque aperiam. Eligendi, explicabo, eos alias earum facilis, deleniti aspernatur officiis itaque suscipit ipsam fugiat temporibus ven "
//     />
//     <Footer />
//       </div>
//   )
// }
