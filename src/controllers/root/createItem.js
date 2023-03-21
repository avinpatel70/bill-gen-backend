import { pool } from '../../db.js';

const createItem = async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const result = await connection.execute
        (`INSERT INTO XX_ITEM_MASTER
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
            (:user_id
             :business_id,
             :item_id,
             :item_name,
             :item_desc,
             :is_active,
             :uom,
             :cgst,
             :sgst,
             :igst,
             :ugst,
             :hsn,
             :creation_date,
             :last_updated_date,
             :deletion_date)`,
            [124,
             2,
             XX_ITEM_MASTER_SEQ.nextval,
             req.body.item_name,
             req.body.item_desc,
             'Y',
             req.body.per,
             req.body.cgst,
             req.body.sgst,
             req.body.igst,
             req.body.ugst,
             req.body.hsn,
             Date(),
             Date(),
             null]);
        res.status(200).send({ message: 'Item created successfully' });
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