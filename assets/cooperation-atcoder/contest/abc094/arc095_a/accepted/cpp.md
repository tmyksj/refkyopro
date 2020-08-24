# AtCoder Beginner Contest 094
## C - Many Medians
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> x(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }

    vector<int> x_asc(x);
    sort(x_asc.begin(), x_asc.end());

    for (int i = 0; i < n; i++) {
        if (x[i] <= x_asc[n / 2 - 1]) {
            cout << x_asc[n / 2] << endl;
        } else {
            cout << x_asc[n / 2 - 1] << endl;
        }
    }
}
```
