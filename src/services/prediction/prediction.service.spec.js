import predictionService from './prediction.service.js';

describe('prediction service', () => {
  beforeEach(() => {});

  it('has getOutlook method', () => {
    expect(predictionService.getOutlook).toBeDefined();
  })
});