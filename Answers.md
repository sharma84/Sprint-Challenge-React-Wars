# Answers

1.  What is React JS and what problems does it try and solve?
    React is a JS library that follows the component based approach which helps in building reusable components. It is used for developing complex and interactive web and mobile UI. React has a virtual DOM, it only refreshes the element that need to change/update instead of reloading the entire page. 

1.  What does it mean to _think_ in react?
    It means to look at the design file and to be able to break it down into smaller reusable components and understand how each components perform/behave. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Class extends the base react class from the library, it holds state and has a render function. 
    Functional takes props as an argument and returns a react component. It does not have state method and is easy to read, debug and test. 

1.  Describe state.
    State determines how the component renders and behaves. It is an object that is used to hold data that may change over time and to control the behavior after each change. State is mutable and is generally updated by event handler. 

1.  Describe props.
    Props are received in our components and are used to pass and display data that is not going to update. Props which stands for property is immutable (read-only). 