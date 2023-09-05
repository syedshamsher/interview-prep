let data = [34, 3, 1, 25, 54, 12, 89, 5, 76, 789];

for (i = 0; i < data.length; i++) {

    for (j = 0; j < data.length; j++) {

        console.warn(data)

        if (data[j] > data[j + 1]) {
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
        }
    }
}