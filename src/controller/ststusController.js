import statusInfo from "../modules/statusModels";
///
export const createInfo = async (req,res)=>{
    const {fname,lname,Age}  = req.body
    try {
        const makeit = await statusInfo.create({
            fname,lname,Age
        })

    return res.status(200).json({
        message:"Sucess",
        data:makeit
    })
        
    } catch (error) {
        return res.status(500).json({
            meassage:" Failed",
            error: error.meassage
        })
        
    }
}


// getAll data
export const getAll = async (reg,res)=>{
    try {
        const getall = await statusInfo.find();
        return res.status(200).json({
            status:"success",
            message:"conglutration",
            data:getall,
        });
    } catch (error) {
        return res.status(500).json({
            statusbar:"failed",
            message:"yeee",
            error:error.message,
        });
        
    }
};

// getone

export const getone = async (req,res)=>{
    try {
        const{ id }= req.params
        const getall = await statusInfo.findById(id);
        if(!getAll){
            return res.status(404).json({
                message:"id not found",
            });
        }
        return res.status(200).json({
            statusbar:"success",
            message:"conglutration",
            data:getall,
        });
    } catch(error){
        return res.status(500).json({
            statusbar:"failed",
            message:"yeee",
            error:error.message,
        });
        
    }
};


//DELETE

export const deleteInfo = async (req,res) =>{
    try{
        const {id} = req.params;
        const getId = await statusInfo.findById(id)
        if(!getId)
        return res.status(404).json({
            message: "id not found"
        });

        const delId = await statusInfo.findByIdAndDelete(id);

        return res.status(200).json({
            statusbar:"Success",
            message:"information Deleted",
            data: delId,
        });
    }catch(error){
        return res.status(500).json({
            statusbar:"failed",
            message:"byanze",
            error:error.message,

        })
    }
}

// update

export const updateInfo = async (req,res)=>{
    try {
    const {fname,lname,Age}=req.body;
    const {id}=req.params;

    const getId = await statusInfo.findById(id);
    if(!getId){
        return res.status(404).json({
            message: "Id not Found",
        })
    }

   await statusInfo.findByIdAndUpdate(id,{
        fname,lname,Age
    })

    return res.status(201).json({
        statusbar: "Success",
        message: "Congz You Did Greate Job",
     })
        
    } catch (error) {
        return res.status(500).json({
            statusbar: "Failed",
            message: "YOU cant Update This Information",
            error: error.meassage
        })
    }
}