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

CREATE TABLE XX_BUSINESS_MASTER 
    ( 
     USER_ID           NUMBER, 
     BUSINESS_ID       NUMBER, 
     BUSINESS_NAME     VARCHAR2 (240), 
     ADDRESS1          VARCHAR2 (240), 
     ADDRESS2          VARCHAR2 (240), 
     CITY              VARCHAR2 (85), 
     STATE             VARCHAR2 (100),
     PINCODE           NUMBER, 
     COUNTRY           VARCHAR2 (240), 
     PHONE             NUMBER, 
     EMAIL             VARCHAR2 (240), 
     GST_UIN           VARCHAR2 (100),
     BANK_NAME         VARCHAR2 (240),
     ACCOUNT_NUM       VARCHAR2 (100),
     ACCOUNT_TYPE      VARCHAR2 (50),
     IFSC_CODE         VARCHAR2 (10),
     UPI_ID            VARCHAR2 (240),
     CREATION_DATE     TIMESTAMP, 
     LAST_UPDATED_DATE TIMESTAMP, 
     DELETION_DATE     TIMESTAMP 
    );
CREATE SEQUENCE XX_BUSINESS_MASTER_SEQ
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  NOCACHE;