# AtCoder Beginner Contest 178
## E - Dist Max
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> x(n), y(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i];
    }

    vector<int> w(n), z(n);
    for (int i = 0; i < n; i++) {
        w[i] = x[i] + y[i];
        z[i] = x[i] - y[i];
    }

    cout << max(*max_element(w.begin(), w.end()) - *min_element(w.begin(), w.end()),
            *max_element(z.begin(), z.end()) - *min_element(z.begin(), z.end())) << endl;
}
```
