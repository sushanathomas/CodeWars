//  do not allocate memory for the return
//  assign values to pre-allocated result

// #include <stdbool.h>
// #include <stddef.h>
// #include <string.h>

// void flick_switch(size_t length, const char *const array[length], bool result[length]) {
//     bool state = true;

//     for (size_t i = 0; i < length; i++) {
//         if (strcmp(array[i], "flick") == 0) {
//             state = !state;
//         }
//         result[i] = state;
//     }
// }




function flickSwitch(array) {
    let state = true;

    return array.map((item) => {
        if (item === "flick") {
            state = !state;
        }
        return state;
    });
}