# AtCoder Beginner Contest 134
## C - Exception Handling
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n), a_sort(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        a_sort[i] = a[i];
    }

    sort(a_sort.begin(), a_sort.end());

    for (int i = 0; i < n; i++) {
        if (a[i] == a_sort[n - 1]) {
            cout << a_sort[n - 2] << endl;
        } else {
            cout << a_sort[n - 1] << endl;
        }
    }
}
```
