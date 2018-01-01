import should from "should";
import EasyDate from "../EasyDate";

describe("EasyDate 运算", () => {
    let date = new EasyDate("+1m");
    it("offset日期应该正确",function () {
        let today = new Date();
        let some = date.toDate();
        if (today.getMonth() == 11) {
            should(some.getMonth() - today.getMonth()).equal(-11);
        }else {
            should(some.getMonth() - today.getMonth()).equal(-11);
        }
    });
});