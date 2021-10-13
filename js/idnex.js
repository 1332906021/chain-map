$(function() {
	// initMap(mapData['china'], "china");
	initMap(mapData['XunHuiFaTing'], "xun_hui_fa_ting");
})

function returnAll(){
	initMap(mapData['china'], "china");
}

function initMap(datas, geoName) {
	var data = {};
	//全国模拟数据
	data.valueList = datas;
	//重庆模拟数据
	// data.valueList=mapData['ChongQing'];
	// geoName="chong_qing_geo";
	//新疆模拟数据
	// data.valueList=mapData['XinJiang'];
	// geoName="xin_jiang_geo";
	// 西藏模拟数据
	// data.valueList=mapData['XiZang'];
	// geoName="xi_zang_geo";
	//北京模拟数据
	// data.valueList=mapData['BeiJing'];
	// geoName="bei_jing_geo";
	//天津模拟数据
	// data.valueList=mapData['TianJin'];
	// geoName="tian_jin_geo";
	//上海模拟数据
	// data.valueList=mapData['ShangHai'];
	// geoName="shang_hai_geo";
	//内蒙古模拟数据
	// data.valueList=mapData['NeiMengGu'];
	// geoName="nei_meng_gu_geo";
	//青海省模拟数据
	// data.valueList=mapData['QingHai'];
	// geoName="qing_hai_geo";
	//四川省
	// data.valueList=mapData['SiChuan'];
	// geoName="si_chuan_geo";
	//黑龙江省
	// data.valueList=mapData['HeiLongJiang'];
	// geoName="hei_long_jiang_geo";
	//甘肃省
	// data.valueList=mapData['GanSu'];
	// geoName="gan_su_geo";
	//云南省
	// data.valueList=mapData['YunNan'];
	// geoName="yun_nan_geo";
	//广西壮族自治区
	// data.valueList=mapData['GuangXi'];
	// geoName="guang_xi_geo";
	//湖南省
	// data.valueList=mapData['HuNan'];
	// geoName="hu_nan_geo";
	//陕西省
	// data.valueList=mapData['ShanXi3'];
	// geoName="shan_xi_3_geo";
	//广东省
	// data.valueList=mapData['GuangDong'];
	// geoName="guang_dong_geo";
	//吉林省
	// data.valueList=mapData['JiLin'];
	// geoName="ji_lin_geo";
	//河北省
	// data.valueList=mapData['HeBei'];
	// geoName="he_bei_geo";
	//湖北省
	// data.valueList=mapData['HuBei'];
	// geoName="hu_bei_geo";
	//贵州省
	// data.valueList=mapData['GuiZhou'];
	// geoName="gui_zhou_geo";
	//山东省
	// data.valueList=mapData['ShanDong'];
	// geoName="shan_dong_geo";
	//江西省
	// data.valueList=mapData['JiangXi'];
	// geoName="jiang_xi_geo";
	//河南省
	// data.valueList=mapData['HeNan'];
	// geoName="he_nan_geo";
	//辽宁省
	// data.valueList=mapData['LiaoNing'];
	// geoName="liao_ning_geo";
	//山西省
	// data.valueList=mapData['ShanXi1'];
	// geoName="shan_xi_1_geo";
	//安徽省
	// data.valueList=mapData['AnHui'];
	// geoName="an_hui_geo";
	//福建省
	// data.valueList=mapData['FuJian'];
	// geoName="fu_jian_geo";
	//浙江省
	// data.valueList=mapData['ZheJiang'];
	// geoName="zhe_jiang_geo";
	//江苏省
	// data.valueList=mapData['JiangSu'];
	// geoName="jiang_su_geo";
	//宁夏回族自治区
	// data.valueList=mapData['NingXia'];
	// geoName="ning_xia_geo";
	//海南省
	// data.valueList=mapData['HaiNan'];
	// geoName="hai_nan_geo";
	//台湾
	// data.valueList=mapData['TaiWan'];
	// geoName="tai_wan_geo";
	//香港
	// data.valueList=mapData['XiangGang'];
	// geoName="xiang_gang_geo";
	//澳门
	// data.valueList=mapData['AoMen'];
	// geoName="ao_men_geo";
	//南海诸岛
	// data.valueList=mapData['NanHaiZhuDao'];
	// geoName="nan_hai_zhu_dao_geo";

	//释放图形资源
	echarts.init(document.getElementById('map')).clear();
	//销毁实例对象
    echarts.init(document.getElementById('map')).dispose();
	//重新实例化对象
	var chartObj = echarts.init(document.getElementById('map'));
	chartObj.showLoading({text: "数据加载中..."});
	var option = {
		/*        title: [{
					text: "最高法："+zgfCount,
					textStyle:{
						color:'#fff',
						fontSize:16
					},
					left: 'center',
					top:120
				}],*/
		tooltip: {
			trigger: 'item',
			// formatter: "{b} : {c}"
			formatter: function(params) {
				if (params.data.name == "最高法") {
					return params.data.name + ":" + params.data.value[2];
				}
				return params.data.name + ":" + params.data.value;
			}
		},
		legend: {
			orient: 'vertical',
			x: 'center',
			y: '165px',
			itemWidth: 15,
			// data:['iphone3','iphone4','iphone5']
		},
		visualMap: {
			min: 0,
			max: 110000,
			// max: 1000000,
			left: 'left',
			bottom: '10%',
			text: ['高', '低'],
			textStyle: {
				color: '#fff'
			},
			inRange: {
				color: ['#fff', '#f5e153', '#e82020', ]
			},
			// 文本，默认为数值文本
			calculable: true
		},
		geo: {
			map: geoName,
			// 当前视角的缩放比例。
			zoom: 1.2,
			top: "10%",
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: true
				}
			},
			roam: true, //是否允许缩放
			itemStyle: {
				normal: {
					color: 'rgba(51, 69, 89, .5)', //地图背景色
					borderColor: '#516a89', //省市边界线00fcff 516a89
					borderWidth: 1
				},
				emphasis: {
					color: 'rgba(37, 43, 61, .5)' //悬浮背景
				}
			}
		},
		series: [{
			name: "",
			type: 'map',
			zoom: 1.2,
			map: geoName,
			aspectScale: 0.75,
			showLegendSymbol: false,
			top: "10%",
			roam: true, //是否允许缩放
			// right:'10%',
			// bottom:'10%',
			// left:'10%',
			data: data.valueList
		}]
	};
	// 加载地图
	chartObj.clear();
	chartObj.setOption(option);
	chartObj.hideLoading();
	chartObj.on('click', function(parm) {
		console.log("parm", parm)
		var param=parm['data'];
		var dqmc=param['name'];
		//获取模拟数据
		// initParams_dqMap[dqmc]['datas']
		//获取地图名称
		// initParams_dqMap[dqmc]['geoName']
		initMap(mapData[initParams_dqMap[dqmc]['datas']], initParams_dqMap[dqmc]['geoName']);
	});
}
