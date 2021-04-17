import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
    value: string

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value,
        onChange, onChangeOption,
        ...restProps
    }) => {
    const mappedOptions: any[] | undefined = options?.map((el, index) => {
            if (el) {
                return (<option key={index} value={el}>{el}</option>)
            } else {
                return (<option>Не из чего выбрать</option>)
            }
        })


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        if (options && onChangeOption) {
            onChangeOption(e.target.value)
        }
    }
    return (
        <select onChange={onChangeCallback} {...restProps} value={value}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
