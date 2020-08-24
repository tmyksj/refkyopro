# AtCoder Beginner Contest 067
## B - Snake Toy
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> l(n);
    for (int i = 0; i < n; i++) {
        cin >> l[i];
    }

    sort(l.begin(), l.end(), greater<int>());

    int res = 0;
    for (int i = 0; i < k; i++) {
        res += l[i];
    }

    cout << res << endl;
}
```
