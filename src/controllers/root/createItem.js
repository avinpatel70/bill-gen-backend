import { pool } from '../../db.js';

const createItem = async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        let query = `INSERT INTO XX_ITEM_MASTER
                     (USER_ID,
                      BUSINESS_ID,
                      ITEM_ID,
                      ITEM_NAME,
                      ITEM_DESC,
                      IS_ACTIVE,
                      UOM,
                      CGST,
                      SGST,
                      IGST,
                      UGST,
                      HSN,
                      CREATION_DATE,
                      LAST_UPDATED_DATE,
                      DELETION_DATE)
                     VALUES 
                     (:user_id,
                      :business_id,
                      XX_ITEM_MASTER_SEQ.nextval,
                      :item_name,
                      :item_desc,
                      :is_active,
                      :uom,
                      :cgst,
                      :sgst,
                      :igst,
                      :ugst,
                      :hsn,
                      SYSDATE,
                      SYSDATE,
                      null)`;
        const result = await connection.execute(query,
            {user_id:123,
             business_id:req.body.business_id,
             item_name:req.body.item_name,
             item_desc:req.body.item_desc,
             is_active:'Y',
             uom:req.body.per,
             cgst:req.body.cgst,
             sgst:req.body.sgst,
             igst:req.body.igst,
             ugst:req.body.ugst,
             hsn:req.body.hsn
            });
        console.log('Insert Query response: ',result);
        await connection.commit();
        const itemId = await connection.execute(`select item_id from XX_ITEM_MASTER where rowid = :row_id`,{row_id:result.lastRowid});
        console.log('Select Query response: ',itemId.rows);
        res.status(200).send({ message: 'Item created successfully' , item_id: itemId.rows[0][0]});
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error inserting the item'});
      } finally {
        if (connection) {
          await connection.close();
        }
      }
}
export default createItem