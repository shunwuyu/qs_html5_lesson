// 引入断言库 有.equal这些断言的API
import shuold from "should";
import EasyDate from "../app/EasyDate";

describe("EasyDate 的运算", () => {
    let date = new EasyDate("+1m");
    it("offset日期应该正确", () => {
        let today = new Date();
        let some = date.toDate();
        if(today.getMonth() == 11) {
            should(some.getMonth()).equal(0);
        } else {
            should(some.getMonth() - today.getMonth()).equal(1);
        }
    })
});