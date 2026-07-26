export const authAdmin = (req, res, next) => {
    const token = "xyz"
    const authAdmin = token === "xyz"
    if (authAdmin) {
        console.log("Authorize admin logging in")
        next()
    }else{
        next(new Error())
    }
}

export const authUser = (req, res, next) => {
    const token = "user" 
    const authUser = token === "user"
    if (!authUser) {
        console.log("next(err)")
        next(new Error())
        // res.status(401).send("Unauthorized access")
    }
    else{
    console.log("Authorized user logging in")
    next()        
    }

}