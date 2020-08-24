# AtCoder Beginner Contest 125
## B - Resale
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> v(n);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }

    vector<int> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += (v[i] > c[i] ? v[i] - c[i] : 0);
    }

    cout << sum << endl;
}
```
