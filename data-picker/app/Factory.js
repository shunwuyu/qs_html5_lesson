// webpack 最本质是  根据  import的顺序  将JS文件组织起来的算法
import DatePicker from "./DatePicker";
import RangeDatePicker from "./RangeDatePicker";

// 类  抽象类  提供生产类的功能， 满足多情况使用的需求
export default {
    createDatePicker (el, options) {
        if ("scattered" in options) {
            return new DatePicker(el, options);
        } else {
            return new RangeDatePicker(el, options);
        }
    }
}