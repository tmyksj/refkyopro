# AtCoder Beginner Contest 085
## C - Otoshidama
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, y;
    cin >> n >> y;

    int res_x = -1, res_y = -1, res_z = -1;
    for (int i = 0; 10000 * i <= y; i++) {
        for (int j = 0; 10000 * i + 5000 * j <= y; j++) {
            int k = (y - 10000 * i - 5000 * j) / 1000;

            if (i + j + k == n) {
                res_x = i;
                res_y = j;
                res_z = k;
                goto out;
            }
        }
    }

out:
    cout << res_x << " " << res_y << " " << res_z << endl;
}
```
