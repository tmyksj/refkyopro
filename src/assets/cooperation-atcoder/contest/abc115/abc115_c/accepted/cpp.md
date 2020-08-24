# AtCoder Beginner Contest 115
## C - Christmas Eve
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> h(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i];
    }

    sort(h.begin(), h.end());

    int h_min = 1000000000;
    for (int i = 0; i + k - 1 < n; i++) {
        if (h_min > h[i + k - 1] - h[i]) {
            h_min = h[i + k - 1] - h[i];
        }
    }

    cout << h_min << endl;
}
```
