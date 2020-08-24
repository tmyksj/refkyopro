# AtCoder Beginner Contest 071
## C - Make a Rectangle
```cpp
#include <algorithm>
#include <functional>
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

    sort(a.begin(), a.end(), greater<long long>());

    long long a0 = 0, a1 = 0;
    for (int i = 0; i < n - 1; i++) {
        if (a[i] == a[i + 1] && a0 == 0) {
            a0 = a[i];
            i++;
        } else if (a[i] == a[i + 1]) {
            a1 = a[i];
            break;
        }
    }

    cout << (a0 * a1) << endl;
}
```
