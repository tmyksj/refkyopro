# AtCoder Beginner Contest 133
## D - Rain Flows into Dams
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<long long> rain(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        rain[i] = a[i - 1] - rain[i - 1];
    }

    for (int i = 0, r = rain[0] + rain[n]; i < n; i++) {
        cout << (i == 0 ? "" : " ") << r;
        r = 2 * (a[i] - r / 2);
    }
    cout << endl;
}
```
