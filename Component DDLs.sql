CREATE TABLE XX_ITEM_MASTER 
    ( 
     USER_ID           NUMBER , 
     BUSINESS_ID       NUMBER , 
     ITEM_ID           NUMBER,
     ITEM_NAME         VARCHAR2 (128) , 
     ITEM_DESC         VARCHAR2 (240) , 
     IS_ACTIVE         VARCHAR2 (1) , 
     UOM               VARCHAR2 (50) , 
     CGST              NUMBER , 
     SGST              NUMBER , 
     IGST              NUMBER , 
     UGST              NUMBER , 
     HSN               VARCHAR2 (10) , 
     CREATION_DATE     TIMESTAMP , 
     LAST_UPDATED_DATE TIMESTAMP , 
     DELETION_DATE     TIMESTAMP 
    );
CREATE SEQUENCE XX_ITEM_MASTER_SEQ
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  NOCACHE;