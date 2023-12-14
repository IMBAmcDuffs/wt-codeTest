## Christopher Crevling - Code Test

Here is the as is state of the code test.
*Final notes for consideration:*
Build out a class and subclass structure for the Flights & service architechture that would have allowed for each flight to be its own class (model) with operations prototyped within that. Each flight would have its own calculators and the primary flights serivce would have allowed for driving into each flight object as it was applied from the primary Flight model. This would allow for proper grouping, handling and overall organization of each resulting flight after it was pulled from the primary requestor

Next steps would have been to build out a model for each Flight that would be provided with (constructor) the Flight result data as the primary Flights service handled the call and request. The model would have the calculation agents applied within the scope of the class in order to allow for the Flight itself to run its own scores on construct as it builds out its object

Once that was achieved the flights would then be sorted via the Flights model and returned back to the endpoint (controller) it was requested from as the primary result.

More...
Would need to add proper validation for each flight key and value as they where processed into the flight class
Error handling woudl need to be tied into a proper logger

Thank you so much and I hope this readme write up helps you to know that in my minds eye I have a clear picture