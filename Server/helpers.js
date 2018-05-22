exports.wrapper = function (fn) {
    return function (...args) {
        fn(...args)
            .catch(
                // next() function call iwth default params,
                // also can be  args[2]("Custom error message")
                args[2]
            )
    }
}

//let wrap = fn => (...args) => fn(...args).catch(args[2])