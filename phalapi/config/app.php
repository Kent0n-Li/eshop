<?php
/**
 * 请在下面放置任何您需要的应用配置
 *
 * @license     http://www.phalapi.net/license GPL 协议
 * @link        http://www.phalapi.net/
 * @author dogstar <chanzonghuang@gmail.com> 2017-07-13
 */

return array(

    /**
     * 应用接口层的统一参数
     */
    'apiCommonRules' => array(
//        'app_key' => array('name' => 'app_key', 'require' => true, 'default' => 'wolf100000001', 'desc' => 'key'),
        //        'format' => array('name' => 'format', 'require' => true, 'default' => 'JSON', 'desc' => 'JSON'),
        //        'api_version' => array('name' => 'api_version', 'require' => true, 'default' => '2.0', 'desc' => '版本'),
        //        'timestamp' => array('name' => 'timestamp', 'require' => true, 'desc' => '时间'),
        //        'req_source' => array('name' => 'req_source', 'require' => true, 'default' => 'app', 'desc' => '类型'),
        //        'sign' => array('name' => 'sign', 'require' => true, 'desc' => '加密sign'),
    ),

    /**
     * 接口服务白名单，格式：接口服务类名.接口服务方法名
     *
     * 示例：
     * - *.*         通配，全部接口服务，慎用！
     * - Site.*      Api_Default接口类的全部方法
     * - *.Index     全部接口类的Index方法
     * - Site.Index  指定某个接口服务，即Api_Default::Index()
     */
    'service_whitelist' => array(
        'Site.Index',
    ),

    'host_url' => 'https://ecshop.test2.shopex123.com/',
    'host_url_res' => 'https://ecshop.test2.shopex123.com/',

    'default_category_img' => 'https://imgt1.oss-cn-shanghai.aliyuncs.com/tools/default_category.png',
    'default_category_banner' => 'https://imgt1.oss-cn-shanghai.aliyuncs.com/tools/default_category_banner.jpg',
    'default_article_img' => 'https://imgt1.oss-cn-shanghai.aliyuncs.com/tools/default_category_banner.jpg',
    'default_category_goodsImage' => 'https://imgt1.oss-cn-shanghai.aliyuncs.com/tools/default_category_banner.jpg',//默认商品图片
);
