# AtCoder Beginner Contest 143
## B - TAKOYAKI FESTIVAL 2019
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> d(n);
    for (int i = 0; i < n; i++) {
        cin >> d[i];
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            res += d[i] * d[j];
        }
    }

    cout << res << endl;
}
```
