/**
 * 
 * @author Archrjoe (lijun@cncn.net)
 * @date    2015-12-11 14:45:54
 * @version 
 */

function Func() {
    // constant
    this.body = document.getElementsByTagName('body')[0];
    this.wrap = document.getElementsByClassName('wrap');
    this.clientHeight = document.documentElement.clientHeight;
    this.wallpaper_filter = document.getElementsByClassName('wallpaper_filter')[0];
    this.container = document.getElementsByClassName('container')[0];
    this.list = document.getElementsByClassName('list')[0];

    // function
    this.hasClass = function(obj, cla) {
        return obj.className.match(new RegExp('(\\s|^)' + cla + '(\\s|$)'));
    };
    this.addClass = function(obj, cla) {
        if (!this.hasClass(obj, cla)) {
            obj.className += ' ' + cla;
        }
    };
    this.removeClass = function(obj, cla) {
        if (this.hasClass(obj, cla)) {
            var reg = new RegExp('(\\s|^)' + cla + '(\\s|$)');
            obj.className = obj.className.replace(reg, '');
        }
    };
    // 两个div的等于窗口高度
    this.divHeight = function() {
        var _this = this;
        for (i = 0; i < _this.wrap.length; i++) {
            _this.wrap[i].style.height = _this.clientHeight + 'px';
        }
    };
    // 随机壁纸
    this.randomWP = function(num) {
        var _this = this,
            radNum = parseInt(Math.random() * num + 1, 10);
        _this.wallpaper_filter.style.backgroundImage = 'url(assets/img/bg' + radNum + '.jpg)';
    };
    this.randomStyle = function(num){
        var _this = this,
            radNum = parseInt(Math.random() * num + 1, 10),
            styles = 'bg_theme' + radNum;
        // _this.addClass(_this.body, styles);
        setTimeout(function(){
            var lists = document.getElementsByClassName('list')[0].getElementsByTagName('a'),
                bodyClass = _this.body.getAttribute('class');
            for(var i = 0; i < lists.length; i++){
                var col = document.getElementsByClassName('list')[0].getElementsByTagName('a')[i].getAttribute('data-theme-color');
                switch(bodyClass){
                    case ' bg_theme1':
                        document.getElementsByClassName('list')[0].getElementsByTagName('a')[i].style.cssText = 'border-left-color: ' + col;
                        break;
                    case ' bg_theme2':
                        document.getElementsByClassName('list')[0].getElementsByTagName('a')[i].style.cssText = 'border-left-color: ' + col;
                        break;
                    case ' bg_theme3':
                        document.getElementsByClassName('list')[0].getElementsByTagName('a')[i].style.cssText = 'border-bottom-color: ' + col;
                        break;
                }
            }
        },400);
    };
    // 壁纸滤镜效果
    this.WPfilter = function() {
        var _this = this;
        _this.container.addEventListener('mouseover', function() {
            _this.addClass(_this.wallpaper_filter, 'cur');
        });
        _this.container.addEventListener('mouseout', function() {
            _this.removeClass(_this.wallpaper_filter, 'cur');
        });
    };
    // 主体list位置
    this.listPosi = function() {
        setTimeout(function() {
            this.list.style.marginTop = -(list.offsetHeight / 2 + 10) + 'px';
        }, 10)
    };
    this.run = function() {
        divHeight()
        randomStyle(3)
        // randomWP(8)
        // WPfilter()
        listPosi()
    };
    run()
}
Func()


var app = angular.module('app', [])
app.controller('listController', function($scope) {
    $scope.websites = websites;
})
