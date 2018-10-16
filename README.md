# findmypast_code_challenge
Given a N input, show a multiplication table of the first N prime numbers

## How to use
No need to install dependencies, this program uses plain Node.JS

`node test` to run unit tests.

`node highPerformanceTest.js` to run the high performance tests for large inputs (beware, the last one takes over 10s).

`node index.js` to run the main program.

## Things that I think are pretty cool
-Everything is done in plain Node.JS. No dependencies whatsoever of external libraries. People tend to forget how much you can do just by using the standard tools of any language.

-The code is well commented and there are explanations for the most complex parts.

-Everything is encapsulated.

-I got to learn new things that I hadn't use before. Like the readline module or assert.

-Is efficient (even though it can be improved). An input of 1,000,000 takes about 10s to complete.

-It's short, the whole program is about 200 lines of code with comments.

-The output table looks nice, it took me a while to figure out how to properly size each cell but I'm pleased with the final result.

-It was super fun to do.

## Future improvements
-Improve efficiency. Even though the program is efficient, I feel it can be improved even further. Specifically when printing the table.

-Add more functionality, algorithms like this are really fun to implement so no reason to stop here.

-Use a web interface. Right now is only a console program, but it can be turned into a web app really easilly. It would also be a good chance to add libraries like Express.

-Offer an API. As with the web interface, adding a REST API to consume would also be simple and add a lot of value.

-Learn more about testing. It has been my first time actually doing unit tests with Assert and I feel that I'm weak on this front. I will start looking into test frameworks (Mocha, Chai...) and add some here.
