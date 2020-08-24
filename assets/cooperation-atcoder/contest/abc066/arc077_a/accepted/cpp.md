# AtCoder Beginner Contest 066
## C - pushpush
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    cout << a[n - 1];
    for (int i = n - 3, d = -2; i < n; i += d) {
        if (i < 0) {
            i = (i == -2 ? -1 : -2);
            d = 2;
            continue;
        }

        cout << " " << a[i];
    }
    cout << endl;
}
```
