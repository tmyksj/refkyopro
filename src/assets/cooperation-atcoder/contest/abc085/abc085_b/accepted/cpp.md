# AtCoder Beginner Contest 085
## B - Kagami Mochi
```cpp
#include <algorithm>
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

    sort(d.begin(), d.end());

    int res = 1;
    for (int i = 1; i < n; i++) {
        if (d[i - 1] < d[i]) {
            res++;
        }
    }

    cout << res << endl;
}
```
