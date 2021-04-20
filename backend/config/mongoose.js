import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
class MongooseConnection{

    connection = null

    getConnection(){

        if(this.connection !== null)
            return this.connection

        mongoose.Promise = global.Promise

        mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        mongoose.connection
                .on('error', (error)=>console.error('CONNECTION ERROR:', error))

        this.connection = mongoose.connection
    }
}

export default MongooseConnection