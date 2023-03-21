import oracledb from 'oracledb';

export let pool; //named export
let isPoolOpen = true;

async function connectToDB(){
    oracledb.initOracleClient({libDir: process.env.ORACLE_HOME});
    pool = await oracledb.createPool({
        user: process.env.DBUSER,
        password: process.env.PASSWORD,
        connectString: process.env.CONNECTSTRING,
        poolMax: 10, // maximum size of the pool
        poolMin: 2, // minimum size of the pool
        poolIncrement: 2, // number of connections to add when the pool is exhausted
        poolTimeout: 60 // time in seconds that a connection can remain idle in the pool before being terminated
      });
    console.log('Connected to DB');
    
    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);
    process.on('SIGHUP', cleanup); 
}

async function cleanup(){
    if(pool.status === 6000 && isPoolOpen === true){
        isPoolOpen = false
        await pool.close().then(()=>console.log('DB disconnected')); 
    } 
 }

export default connectToDB; //default export