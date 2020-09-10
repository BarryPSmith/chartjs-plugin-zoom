describe('zoom', function() {
	const data = {
		datasets: [{
			data: [{
				x: 1,
				y: 3
			}, {
				x: 2,
				y: 2
			}, {
				x: 3,
				y: 1
			}]
		}]
	};

	describe('with drag', function() {
		describe('on linear scale', function() {
			let chart, scaleX, scaleY;

			it('should be applied on X scale when mode = x', function() {
				chart = jasmine.chart.acquire({
					type: 'line',
					data,
					options: {
						scales: {
							xAxes: [{
								id: 'xScale0',
								type: 'linear'
							}],
							yAxes: [{
								id: 'yScale0',
								type: 'linear'
							}]
						},
						plugins: {
							zoom: {
								zoom: {
									enabled: true,
									drag: true,
									mode: 'x'
								}
							}
						}
					}
				});

				scaleX = chart.scales.xScale0;
				scaleY = chart.scales.yScale0;

				jasmine.triggerMouseEvent(chart, 'mousedown', {
					x: scaleX.getPixelForValue(1.5),
					y: scaleY.getPixelForValue(1.1)
				});
				jasmine.triggerMouseEvent(chart, 'mouseup', {
					x: scaleX.getPixelForValue(2.8),
					y: scaleY.getPixelForValue(1.7)
				});

				expect(scaleX.options.ticks.min).toBeCloseTo(1.5);
				expect(scaleX.options.ticks.max).toBeCloseTo(2.8);
				expect(scaleY.options.ticks.min).toBeUndefined();
				expect(scaleY.options.ticks.max).toBeUndefined();
			});

			it('should be applied on X scale when mode = f() => x', function() {
				chart = jasmine.chart.acquire({
					type: 'line',
					data,
					options: {
						scales: {
							xAxes: [{
								id: 'xScale0',
								type: 'linear'
							}],
							yAxes: [{
								id: 'yScale0',
								type: 'linear'
							}]
						},
						plugins: {
							zoom: {
								zoom: {
									enabled: true,
									drag: true,
									mode: function() {
										return 'x';
									}
								}
							}
						}
					}
				});

				scaleX = chart.scales.xScale0;
				scaleY = chart.scales.yScale0;

				jasmine.triggerMouseEvent(chart, 'mousedown', {
					x: scaleX.getPixelForValue(1.5),
					y: scaleY.getPixelForValue(1.1)
				});
				jasmine.triggerMouseEvent(chart, 'mouseup', {
					x: scaleX.getPixelForValue(2.8),
					y: scaleY.getPixelForValue(1.7)
				});

				expect(scaleX.options.ticks.min).toBeCloseTo(1.5);
				expect(scaleX.options.ticks.max).toBeCloseTo(2.8);
				expect(scaleY.options.ticks.min).toBeUndefined();
				expect(scaleY.options.ticks.max).toBeUndefined();
			});

			it('should be applied on Y scale when mode = y', function() {
				chart = jasmine.chart.acquire({
					type: 'line',
					data,
					options: {
						scales: {
							xAxes: [{
								id: 'xScale0',
								type: 'linear'
							}],
							yAxes: [{
								id: 'yScale0',
								type: 'linear'
							}]
						},
						plugins: {
							zoom: {
								zoom: {
									enabled: true,
									drag: true,
									mode: 'y'
								}
							}
						}
					}
				});

				scaleX = chart.scales.xScale0;
				scaleY = chart.scales.yScale0;

				jasmine.triggerMouseEvent(chart, 'mousedown', {
					x: scaleX.getPixelForValue(1.5),
					y: scaleY.getPixelForValue(1.1)
				});
				jasmine.triggerMouseEvent(chart, 'mouseup', {
					x: scaleX.getPixelForValue(2.8),
					y: scaleY.getPixelForValue(1.7)
				});

				expect(scaleX.options.ticks.min).toBeUndefined();
				expect(scaleX.options.ticks.max).toBeUndefined();
				expect(scaleY.options.ticks.min).toBeCloseTo(1.1);
				expect(scaleY.options.ticks.max).toBeCloseTo(1.7);
			});

			it('should be applied on Y scale when mode = f() => y', function() {
				chart = jasmine.chart.acquire({
					type: 'line',
					data,
					options: {
						scales: {
							xAxes: [{
								id: 'xScale0',
								type: 'linear'
							}],
							yAxes: [{
								id: 'yScale0',
								type: 'linear'
							}]
						},
						plugins: {
							zoom: {
								zoom: {
									enabled: true,
									drag: true,
									mode: function() {
										return 'y';
									}
								}
							}
						}
					}
				});

				scaleX = chart.scales.xScale0;
				scaleY = chart.scales.yScale0;

				jasmine.triggerMouseEvent(chart, 'mousedown', {
					x: scaleX.getPixelForValue(1.5),
					y: scaleY.getPixelForValue(1.1)
				});
				jasmine.triggerMouseEvent(chart, 'mouseup', {
					x: scaleX.getPixelForValue(2.8),
					y: scaleY.getPixelForValue(1.7)
				});

				expect(scaleX.options.ticks.min).toBeUndefined();
				expect(scaleX.options.ticks.max).toBeUndefined();
				expect(scaleY.options.ticks.min).toBeCloseTo(1.1);
				expect(scaleY.options.ticks.max).toBeCloseTo(1.7);
			});

			it('should be applied on X and Y scales when mode = xy', function() {
				chart = jasmine.chart.acquire({
					type: 'line',
					data,
					options: {
						scales: {
							xAxes: [{
								id: 'xScale0',
								type: 'linear'
							}],
							yAxes: [{
								id: 'yScale0',
								type: 'linear'
							}]
						},
						plugins: {
							zoom: {
								zoom: {
									enabled: true,
									drag: true,
									mode: 'xy'
								}
							}
						}
					}
				});

				scaleX = chart.scales.xScale0;
				scaleY = chart.scales.yScale0;

				jasmine.triggerMouseEvent(chart, 'mousedown', {
					x: scaleX.getPixelForValue(1.5),
					y: scaleY.getPixelForValue(1.1)
				});
				jasmine.triggerMouseEvent(chart, 'mouseup', {
					x: scaleX.getPixelForValue(2.8),
					y: scaleY.getPixelForValue(1.7)
				});

				expect(scaleX.options.ticks.min).toBeCloseTo(1.5);
				expect(scaleX.options.ticks.max).toBeCloseTo(2.8);
				expect(scaleY.options.ticks.min).toBeCloseTo(1.1);
				expect(scaleY.options.ticks.max).toBeCloseTo(1.7);
			});
		});
	});

	describe('with wheelModifierKey', function() {
		for (const key of ['ctrl', 'alt', 'shift', 'meta']) {
			for (const pressed of [true, false]) {
				let chart, scaleX, scaleY;
				it(`should ${pressed ? '' : 'not '}change ${pressed ? 'with' : 'without'} key ${key}`, function() {
					const failureSpy = jasmine.createSpy('wheelFailed');
					chart = jasmine.chart.acquire({
						type: 'line',
						data,
						options: {
							scales: {
								xAxes: [{
									id: 'xScale0',
									type: 'linear',
									ticks: {
										min: 0,
										max: 10
									}
								}],
								yAxes: [{
									id: 'yScale0',
									type: 'linear'
								}]
							},
							plugins: {
								zoom: {
									zoom: {
										enabled: true,
										mode: 'x',
										wheelModifierKey: key,
										onWheelModifierKeyFailed: failureSpy
									}
								}
							}
						}
					});

					scaleX = chart.scales.xScale0;
					scaleY = chart.scales.yScale0;

					const oldMinX = scaleX.options.ticks.min;
					const oldMaxX = scaleX.options.ticks.max;

					const wheelEv = {
						x: scaleX.getPixelForValue(1.5),
						y: scaleY.getPixelForValue(1.1),
						deltaY: 1
					};
					if (pressed) {
						wheelEv[key + 'Key'] = true;
					}

					jasmine.triggerMouseEvent(chart, 'wheel', wheelEv);

					if (pressed) {
						expect(scaleX.options.ticks.min).not.toEqual(oldMinX);
						expect(scaleX.options.ticks.max).not.toEqual(oldMaxX);
						expect(failureSpy).not.toHaveBeenCalled();
					} else {
						expect(scaleX.options.ticks.min).toEqual(oldMinX);
						expect(scaleX.options.ticks.max).toEqual(oldMaxX);
						expect(failureSpy).toHaveBeenCalled();
					}
				});
			}
		}
	});
});
