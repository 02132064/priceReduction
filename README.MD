需求描述
商店里进行购物结算时会使用收银机系统，折抬收银机会在结算时根据客户的购物车中的商品和商店正在进行的优惠活动进行结算和打印购物小票。

已知商品信息包含：名称（productName），数量单位（Unit），单价（price），类别（type）和条形码（Unicode）
已知我们可以对收银机进行设置。使之支持各种优惠。

我们需要实现一个名为打印小票的小模板，收银机会将输入的数据转化成一个json数据然后一次性传给我们这个小模板，我们将从控制台中输出结算清单的文本。

输入格式（样例）
[
'ITEM000001',
'ITEM000001',
'ITEM000001',
'ITEM000001',
'ITEM000001',
'ITEM000003-2',
'ITEM000001',
'ITEM000005',
'ITEM000004'
]
其中对'ITEM000003-2'来说，"-"之前是标准的条形码，"-"之后是数量。
当我们购买需要称量的物品的时候，由称量的机器生成此类条形码，收银机负责识别生产小票。

该商品正在对部分商品进行"单品打折"的优惠活动。解释：
 “单品打折”是指：某一商品的总价会打完折再收取。
  店员设置该优惠哪些对应的条形码对应的商品能享受此优惠以及折扣的比例。
要求写代码支撑以上功能，并根据输入和设置的不同，输出下列小票。
小票样式以及内容（样例）：
 当购买的商品中，有符合“单品打折”优惠条件的商品时：
***<没钱赚商店>购物清单***
名称：可口可乐，数量：3瓶，单价：3.00（元），小计：8.55（元），优惠：0.45（元）
名称：羽毛球，数量：5个，单价：1.00（元），小计：4.50（元），优惠：0.5（元）
名称：苹果，数量：2斤，单价：5.50（元），小计：11.00（元）
-------------------------
单品打折商品：
名称：可口可乐，折扣：九五折
名称：羽毛球，折扣:九折
-------------------------
总计：24.05（元）
节省：0.95（元）
*************************
当购买的商品中，没有符合“买三免一”优惠条件的商品是：
***<没钱赚商店>购物清单***
名称：可口可乐，数量：3瓶，单价：3.00（元），小计：9.00（元）
名称：羽毛球，数量：5个，单价：1.00（元），小计：5.00（元）
名称：苹果，数量：2斤，单价：5.50（元），小计：11.00（元）
-------------------------
总计：25.00（元）
*************************

数据格式
1.每一个商品对象的结构如下（样例）：
{barcode:"ITEM000001",
 name:"可口可乐",
 unit："瓶",
 category:"食品",
 subCategory:"碳酸饮料",
 price:3.00
}
2.促销信息对象的数组格式（样例）：
[
   {
     type:'BUY_THREE_GET_ONE_FREE',
     barcode:['ITEM000001']
   },{
   type:'OTHER_PROMOTION',
   barcode:['ITEM000003','ITEM000004']
   }
 ]