const destination=require('../models/destination');




const allDestination=async(req,res)=>{
    try {
        const destinations = await destination.find({});
        res.render('index', { destinations });
        
    } catch (error) {
        res.status(400).send ({message:error.message})
    }
    
}

const prefer=(req,res)=>{    
    res.render('prefer')
 }



 const preferDestination = async (req, res) => {
    try {
      const { category, budget, type } = req.body; 
  
      
      const filter = {};
  

      if (category) {
        filter.category = category;
      }
      if (budget) {
        filter.budget = budget;
      }
      if (type) {
        filter.type = type;
      }
  
    
      const listing= await destination.find(filter);  
  
      res.render('result', { listing});
  
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  const addNewDestination=(req,res)=>{
    res.render('new-destination')

  }
  const createNewDestination=async(req,res)=>{
    try {
      const {title,description,image,price,location,country,category,budget,type}=req.body
      console.log(req.body)
     
      const newDestination=new destination({title,description,image,price,location,country,category,budget,type})
      newDestination.save()
      res.redirect('/')
      
    } catch (error) {
      res.status(400).send({message:error.message})
      
    }
  }
  

module.exports={allDestination,prefer,preferDestination,addNewDestination,createNewDestination}