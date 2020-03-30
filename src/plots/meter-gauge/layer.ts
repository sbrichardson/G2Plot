import { deepMix, uniqueId } from '@antv/util';
import { registerPlotType } from '../../base/global';
import { LayerConfig } from '../../base/layer';
import GaugeLayer from '../gauge/layer';
import { GaugeViewConfig } from '../gauge/options';
import { getOptions } from '../gauge/geometry/shape/options';
import { getGlobalTheme } from '../../theme';

export interface MeterGaugeViewConfig extends GaugeViewConfig {}

export interface MeterGaugeLayerConfig extends MeterGaugeViewConfig, LayerConfig {}

export default class MeterGaugeLayer<T extends MeterGaugeLayerConfig = MeterGaugeLayerConfig> extends GaugeLayer<T> {
  public static getDefaultOptions() {
    return deepMix({}, super.getDefaultOptions(), {
      axis:{
        visible: true,
        offset: -10,
        tickCount: 25,
        subTickCount: 4,
        tickLine:{
          visible: true,
          length: 2,
          style:{
            stroke:'#aaa',
            lineWidth: 1
          }
        },

      }
    });
  }

  public type: string = 'meterGauge';
}

registerPlotType('meterGauge', MeterGaugeLayer);
