import BigNumber from "bignumber.js"
import {Transform} from "class-transformer";
import {cloneDeep} from "lodash";

/*
* class-transformer BigNumber 装饰器
* */
export function TransformBigNumber(defaultValue: BigNumber | number = new BigNumber(0)) {
    return Transform(({value}) => {
        let num = new BigNumber(value)
        return num.isNaN() ? defaultValue : num
    })
}

/*
* class-transformer 默认值装饰器, 支持值, 方法, block等等
* */
export function TransformDefault(_value: unknown) {
    return Transform(({value}) => {
        return value ?? cloneDeep(_value)
    })
}