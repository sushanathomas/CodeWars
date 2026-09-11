//  mutate values in place
// by swapping its elements

function swap_values(values) {
  let temp = values[0]; 
    values[0] = values[1];
    values[1] = temp; 
}