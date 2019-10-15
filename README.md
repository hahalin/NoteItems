## 開發紀錄

1.加入AdminLTE2 theme，public/assets資料夾沒放上github，請複製bower_components,plugins,dist這三個資料夾至public/assets即可使用.

2.使用Redux紀錄State

3.用戶登入使用JWT設計，搭配 [NodeJS JWT Server專案](https://github.com/hahalin/Serverless-Helloworld/tree/express).
    
4.加入HOC設計、需認證的Ｃomponent進行檢驗登入狀態.

5.左方導覽選單根據登入狀態切換顯示對應需有的選項。
    
6.呼叫API取得資料需帶入token於header，server認證後放行取得資料. 
