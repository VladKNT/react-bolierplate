export interface IFlexbox {
    display?: 'flex' | 'inline-flex';
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'| 'space-evenly';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    order?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number | 'auto';
    flex?: any;
}
