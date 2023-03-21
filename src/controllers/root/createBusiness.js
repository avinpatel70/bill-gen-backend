import { pool } from '../../db.js';

const createBusiness = async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        let query = `INSERT INTO XX_BUSINESS_MASTER
                     (USER_ID          ,
                      BUSINESS_ID      ,
                      BUSINESS_NAME    , 
                      ADDRESS1         , 
                      ADDRESS2         , 
                      CITY             ,
                      STATE            ,
                      PINCODE          ,
                      COUNTRY          , 
                      PHONE            ,
                      EMAIL            , 
                      GST_UIN          ,
                      BANK_NAME        ,
                      ACCOUNT_NUM      ,
                      ACCOUNT_TYPE     ,
                      IFSC_CODE        ,
                      UPI_ID           ,
                      CREATION_DATE    ,
                      LAST_UPDATED_DATE,
                      DELETION_DATE)
                     VALUES 
                     (:user_id      ,
                      XX_BUSINESS_MASTER_SEQ.NEXTVAL,
                      :business_name, 
                      :address1     , 
                      :address2     , 
                      :city         ,
                      :state        ,
                      :pincode      ,
                      :country      , 
                      :phone        ,
                      :email        , 
                      :gst_uin      ,
                      :bank_name    ,
                      :account_num  ,
                      :account_type ,
                      :ifsc_code    ,
                      :upi_id       ,
                      SYSDATE,
                      SYSDATE,
                      null)`;
        const result = await connection.execute(query,
            [123                        ,
             req.body.business_name     ,
             req.body.address1          ,
             req.body.address2          ,
             req.body.city              ,
             req.body.state             ,
             req.body.pincode           ,
             req.body.country           ,
             req.body.phone             ,
             req.body.email             ,
             req.body.gst_uin           ,
             req.body.bank_name         ,
             req.body.account_num       ,
             req.body.account_type      ,
             req.body.ifsc_code         ,
             req.body.upi_id]);
        console.log('Insert Query response: ',result);
        await connection.commit();
        const businessId = await connection.execute(`select business_id from XX_BUSINESS_MASTER where rowid = :row_id`,{row_id:result.lastRowid});
        console.log('Select Query response: ',businessId.rows);
        res.status(200).send({ message: 'Business created successfully' , businessId: businessId.rows[0][0]});
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error inserting the Business data'});
      } finally {
        if (connection) {
          await connection.close();
        }
      }
}
export default createBusiness