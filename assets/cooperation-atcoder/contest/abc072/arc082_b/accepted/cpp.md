# AtCoder Beginner Contest 072
## D - Derangement
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> p(n);
    for (int i = 0; i < n; i++) {
        cin >> p[i];
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        if (p[i] == i + 1) {
            res++;
            i++;
        }
    }

    cout << res << endl;
}
```
