import db from "../db.js"

export const createUser=(req,res)=>{
    const {name, email, phone, password, hobby, address} = req.body

    const sql = " select * from user where email=?"

    db.query(sql, email, (err, result)=>{
        if(err){
            res.send(err)
        } else{
            if(result.length>0){
                res.send({statusCode:300, message:"Email is already registered and exist!!"})
            }else{
                const sql = "select * from user where phone=?"
                db.query(sql, phone, (err,data)=>{
                    if(err){
                        res.send(err)
                    }else{
                        if(data.length>0){
                            res.send({statusCode:300, message:"Phone is already registered and exist!!"})

                        }else{
                            const sql = " insert into user(name, email, password, address, phone, hobby) values(?,?,?,?,?,?)"
                            const values = [name, email, password, address, phone, hobby]
                            db.query(sql,values,(err,result)=>{
                                if(err){
                                    res.send(err);
                                }else{
                                    res.send({statusCode:200, message:"succesfully added"})
                                }
                            })
                        }
                    }

                })
            }
        }
    })
}



// update, delete, select * from users