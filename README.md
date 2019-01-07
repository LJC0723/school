## 校园闲置物品交易平台

### _验证格式_   
&nbsp; http://localhost:8080/user_login.action?user.username=1   

### _需要放在一起_    
&nbsp; @Resource(name = "communityService")   
&nbsp; private CommunityService communityService;   

### _spring框架中的dbcp规定了连接的数据库_   

&nbsp; 用户【登录、注册、修改密码、修改密码】   

&nbsp; 商品【增加、删除、查询、修改】   
&nbsp; 发布记录【增加、删除、修改、查询】   
&nbsp; 下单记录【增加、删除、修改、查询】   
&nbsp; 购买记录【增加、删除、修改、查询】   

----

### 用户动作   

&nbsp; 登录----user   
&nbsp; 注册----user   
&nbsp; 修改密码----user   
&nbsp; 发布商品----商品信息表增加、发布记录表增加信息   
&nbsp; 下单商品----下单记录表增加信息   
&nbsp; 购买商品----商品数量减少、下单记录表状态改变、购买记录表增加信息   
&nbsp; 下架商品----商品状态改变、发布商品状态改变、   

---

### 管理员动作  

&nbsp; 登录    
&nbsp; 注册  
&nbsp; 管理用户   
&nbsp; 管理商品  

### 检查out中的配置问题   
&nbsp; web元素检查：ctrl+shift+c & F12    

### 加入所需要的全部文件路径   

&nbsp; Flag:会一直维护到本科结束，欢迎提问。
