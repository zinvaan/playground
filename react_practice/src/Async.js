// synchronous

const Async = () => {
  console.log(" I ");

  console.log(" eat ");

  setTimeout(() => {
    console.log(" ice cream ");
  }, 4000);

  console.log(" with a ");

  console.log(" spoon ");
};

export default Async;
